import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface IndustryItem {
  name: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  trend: number;
}
