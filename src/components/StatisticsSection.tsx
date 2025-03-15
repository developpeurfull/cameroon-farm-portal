
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from 'recharts';
import AnimatedSection from './AnimatedSection';

const StatisticsSection: React.FC = () => {
  const productionData = [
    { name: 'Bovins', value: 145000, fill: '#007A5E' },
    { name: 'Ovins', value: 37500, fill: '#A67C52' },
    { name: 'Caprins', value: 46800, fill: '#CE1126' },
    { name: 'Porcins', value: 42300, fill: '#FCD116' },
    { name: 'Volaille', value: 97200, fill: '#2E8B57' },
  ];
  
  const regionData = [
    { name: 'Extrême-Nord', bovins: 1550, petitsRuminants: 2100 },
    { name: 'Nord', bovins: 1250, petitsRuminants: 1850 },
    { name: 'Adamaoua', bovins: 2700, petitsRuminants: 1200 },
    { name: 'Ouest', bovins: 680, petitsRuminants: 1900 },
    { name: 'Nord-Ouest', bovins: 720, petitsRuminants: 1650 },
  ];
  
  const distributionData = [
    { name: 'Élevage Traditionnel', value: 68 },
    { name: 'Élevage Semi-Intensif', value: 24 },
    { name: 'Élevage Intensif', value: 8 },
  ];

  const growthData = [
    { year: '2018', production: 220 },
    { year: '2019', production: 245 },
    { year: '2020', production: 260 },
    { year: '2021', production: 280 },
    { year: '2022', production: 305 },
    { year: '2023', production: 335 },
  ];
  
  const COLORS = ['#007A5E', '#FCD116', '#CE1126'];
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 rounded-md">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.fill || entry.color }}>
              {entry.name}: {entry.value.toLocaleString()} tonnes
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  const PieCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 rounded-md">
          <p className="font-semibold">{payload[0].name}</p>
          <p style={{ color: payload[0].payload.fill || COLORS[payload[0].dataIndex % COLORS.length] }}>
            {payload[0].value}% des exploitations
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <section id="statistics" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Données
            </span>
            <h2 className="section-heading mt-4 after:left-1/3 after:right-1/3 after:mx-auto">Statistiques de l'élevage</h2>
            <p className="text-muted-foreground text-pretty text-lg">
              Explorez les chiffres qui illustrent l'importance du secteur de l'élevage dans l'économie 
              camerounaise et sa répartition à travers les différentes régions du pays selon les données récentes de 2023.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection animation="fade-in-left" className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Production de viande par type (tonnes/an)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={productionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill="#007A5E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Distribution des types d'élevage</h3>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieCustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <AnimatedSection className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Distribution du bétail par région (milliers de têtes)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bovins" name="Bovins" fill="#007A5E" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="petitsRuminants" name="Petits Ruminants" fill="#FCD116" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Évolution de la production de viande (en milliers de tonnes)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={growthData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="production" 
                    name="Production totale" 
                    stroke="#007A5E" 
                    strokeWidth={2} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection className="mt-16 glass-card rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">30%</div>
              <p className="text-muted-foreground">de la population active impliquée dans l'élevage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">15%</div>
              <p className="text-muted-foreground">contribution au PIB agricole</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">19.7M+</div>
              <p className="text-muted-foreground">d'animaux d'élevage au total</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">8%</div>
              <p className="text-muted-foreground">taux de croissance annuel du secteur</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatisticsSection;
