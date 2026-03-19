import {
  BatteryLow,
  Brain,
  Compass,
  Ear,
  HeartHandshake,
  HeartPulse,
  MessagesSquare,
  Milestone,
  MoonStar,
  Repeat,
  School,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
  type LucideProps,
} from "lucide-react";

const icons = {
  "battery-low": BatteryLow,
  brain: Brain,
  compass: Compass,
  ear: Ear,
  "heart-handshake": HeartHandshake,
  "heart-pulse": HeartPulse,
  "messages-square": MessagesSquare,
  milestone: Milestone,
  "moon-star": MoonStar,
  repeat: Repeat,
  school: School,
  search: Search,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  "users-round": UsersRound,
} as const;

type IconName = keyof typeof icons;

type ContentIconProps = LucideProps & {
  name: IconName;
};

export function ContentIcon({ name, ...props }: ContentIconProps) {
  const Icon = icons[name];

  return <Icon {...props} />;
}
