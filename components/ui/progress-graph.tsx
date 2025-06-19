"use client";


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const generateYearData = () => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  
  const data = [];
  let currentExpertise = 20; // Starting expertise

  for (let year = startYear; year <= currentYear; year++) {
    let expertise = currentExpertise;
    let label = '';

    // Determine level based on expertise
    if (expertise < 30) label = 'Beginner';
    else if (expertise < 50) label = 'Junior';
    else if (expertise < 70) label = 'Intermediate';
    else if (expertise < 85) label = 'Advanced';
    else if (expertise < 95) label = 'Senior';
    else label = 'Expert';

    data.push({
      year: year.toString(),
      expertise,
      label
    });

    // Increase expertise for next year
    // The increase gets smaller as expertise grows
    if (currentExpertise < 95) {
      currentExpertise += Math.max(5, 20 - (year - startYear) * 2);
    } else {
      currentExpertise += Math.max(1, (95 - currentExpertise) / 2);
    }
    currentExpertise = Math.min(currentExpertise, 98); // Cap at 98%
  }

  // Add partial progress for current year if it's not December
  if (currentMonth < 11 && data.length > 0) {
    const lastEntry = data[data.length - 1];
    lastEntry.expertise = Math.max(20, Math.round(lastEntry.expertise * ((currentMonth + 1) / 12)));
  }

  return data;
};

export const ProgressGraph = () => {
  const data = generateYearData();

  return (
    <div className="h-full w-full p-4 bg-white text-black dark:bg-black dark:text-white">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"  />
          <XAxis 
            dataKey="year" 
            stroke="#ff6b00"
            tick={{ fill: '#ff6b00' }}
            className="text-black dark:text-orange-300"
          />
          <YAxis 
            stroke="#ff6b00"
            tick={{ fill: '#ff6b00' }}
            label={{ 
              value: 'Expertise Level', 
              angle: -90, 
              position: 'insideLeft',
              fill: '#ff6b00'
            }}
            className="text-black dark:text-orange-300"
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#000',
              border: '1px solid #ffb380',
              borderRadius: '8px'
            }}
            labelStyle={{ color: '#ff6b00' }}
            formatter={(value: number, name: string, props: any) => [
              `${value}% - ${props.payload.label}`,
              'Expertise'
            ]}
            wrapperStyle={{ color: '#000' }}
          />
          <Line 
            type="monotone" 
            dataKey="expertise" 
            stroke="#ff6b00" 
            strokeWidth={2}
            dot={{ 
              fill: '#ff6b00',
              stroke: '#ff6b00',
              strokeWidth: 2,
              r: 4
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}; 