import React from 'react';
import { LayoutDashboard, Users, Settings, Activity } from 'lucide-react';

export default function SaaSDashboard() {
  return (
    <div className="flex h-screen w-full bg-[#050505] text-[#e0e0e0] font-sans overflow-hidden">
      <div className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <div className="font-bold text-lg text-white">Acme Inc.</div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-500/10 text-indigo-400 rounded-md text-sm font-medium">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors">
            <Activity className="w-4 h-4" /> Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors">
            <Users className="w-4 h-4" /> Customers
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center px-8 justify-between">
          <h2 className="text-lg font-medium text-white">Overview</h2>
          <div className="w-8 h-8 rounded-full bg-white/10"></div>
        </header>
        <main className="flex-1 p-8 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-white/50 mb-2">Total Revenue</div>
              <div className="text-2xl font-bold text-white">$45,231.89</div>
              <div className="text-xs text-emerald-400 mt-2">+20.1% from last month</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-white/50 mb-2">Subscriptions</div>
              <div className="text-2xl font-bold text-white">+2,350</div>
              <div className="text-xs text-emerald-400 mt-2">+180.1% from last month</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-white/50 mb-2">Active Users</div>
              <div className="text-2xl font-bold text-white">+12,234</div>
              <div className="text-xs text-emerald-400 mt-2">+19% from last month</div>
            </div>
          </div>
          <div className="h-96 rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center">
            <span className="text-white/30 text-sm">Chart Placeholder</span>
          </div>
        </main>
      </div>
    </div>
  );
}
