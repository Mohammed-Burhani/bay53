import React from 'react';
import { 
  AlertCircle, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  LineChart, 
  Database, 
  Lock,
  Banknote,
  Settings,
  Package,
  TrendingUp,
  Users
} from 'lucide-react';

const iconMap: Record<string, any> = {
  FileText,
  AlertCircle,
  ShieldCheck,
  Zap,
  LineChart,
  Lock,
  BarChart3,
  Banknote,
  Settings,
  Package,
  TrendingUp,
  Users
};

interface ChallengeItem {
  icon: string;
  title: string;
  description: string;
}

interface ModuleChallengesProps {
  challenges: ChallengeItem[];
  solutions: ChallengeItem[];
}

const ModuleChallenges = ({ challenges, solutions }: ModuleChallengesProps) => {
  const renderIcon = (iconName: string, colorClass: string) => {
    const Icon = iconMap[iconName] || AlertCircle;
    return <Icon className={`w-6 h-6 ${colorClass}`} />;
  };

  const challengeColors = ["text-red-500", "text-orange-500", "text-amber-500"];
  const solutionColors = ["text-green-500", "text-blue-500", "text-indigo-500"];
  const challengeBgColors = ["bg-red-50", "bg-orange-50", "bg-amber-50"];
  const solutionBgColors = ["bg-green-50", "bg-blue-50", "bg-indigo-50"];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Section 2</h2>
          <h3 className="text-4xl font-bold text-gray-900">Understanding Your Challenges & Our Solutions</h3>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Challenges */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-gray-800 pb-4 border-b border-gray-200">Business Challenges</h4>
              <div className="space-y-6">
                {challenges.map((item, index) => (
                  <div key={index} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className={`shrink-0 w-12 h-12 rounded-xl ${challengeBgColors[index % challengeBgColors.length]} flex items-center justify-center`}>
                      {renderIcon(item.icon, challengeColors[index % challengeColors.length])}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How Bay53 Solves Them */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-gray-800 pb-4 border-b border-gray-200">How Bay53 Solves Them</h4>
              <div className="space-y-6">
                {solutions.map((item, index) => (
                  <div key={index} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <div className={`shrink-0 w-12 h-12 rounded-xl ${solutionBgColors[index % solutionBgColors.length]} flex items-center justify-center`}>
                      {renderIcon(item.icon, solutionColors[index % solutionColors.length])}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleChallenges;
