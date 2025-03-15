
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import AnimatedSection from './AnimatedSection';

const StatisticsSection: React.FC = () => {
  const productionData = [
    { name: 'Bovins', value: 125000, fill: '#007A5E' },
    { name: 'Ovins', value: 32000, fill: '#A67C52' },
    { name: 'Caprins', value: 41000, fill: '#CE1126' },
    { name: 'Porcins', value: 37000, fill: '#FCD116' },
    { name: 'Volaille', value: 85000, fill: '#2E8B57' },
  ];
  
  const regionData = [
    { name: 'Extrême-Nord', bovins: 1200, petitsRuminants: 1800 },
    { name: 'Nord', bovins: 950, petitsRuminants: 1400 },
    { name: 'Adamaoua', bovins: 2100, petitsRuminants: 980 },
    { name: 'Ouest', bovins: 450, petitsRuminants: 1600 },
    { name: 'Nord-Ouest', bovins: 550, petitsRuminants: 1300 },
  ];
  
  const distributionData = [
    { name: 'Élevage Traditionnel', value: 75 },
    { name: 'Élevage Semi-Intensif', value: 20 },
    { name: 'Élevage Intensif', value: 5 },
  ];
  
  const COLORS = ['#007A5E', '#FCD116', '#CE1126'];
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-muted rounded-md shadow-md">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.fill }}>
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
        <div className="bg-white p-3 border border-muted rounded-md shadow-md">
          <p className="font-semibold">{payload[0].name}</p>
          <p style={{ color: payload[0].payload.fill }}>
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Données
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Statistiques de l'élevage</h2>
            <p className="text-muted-foreground text-pretty">
              Explorez les chiffres qui illustrent l'importance du secteur de l'élevage dans l'économie 
              camerounaise et sa répartition à travers les différentes régions du pays.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection animation="fade-in-left" className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Production de viande par type (tonnes/an)</h3>
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
                  <Bar dataKey="value" fill="#007A5E" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Distribution des types d'élevage</h3>
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
        
        <AnimatedSection className="mt-12 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Distribution du bétail par région (milliers de têtes)</h3>
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
                <Bar dataKey="bovins" name="Bovins" fill="#007A5E" />
                <Bar dataKey="petitsRuminants" name="Petits Ruminants" fill="#FCD116" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-16 glass-card rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">30%</div>
              <p className="text-muted-foreground">de la population active impliquée dans l'élevage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">15%</div>
              <p className="text-muted-foreground">contribution au PIB agricole</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cameroon-green mb-2">12M+</div>
              <p className="text-muted-foreground">d'animaux d'élevage au total</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatisticsSection;
