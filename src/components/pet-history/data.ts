import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const types = [
  {
    value: "vet",
    label: "Vet",
  },
  {
    value: "medicine",
    label: "Medicine",
  },
  {
    value: "walk",
    label: "Walk",
  },
  {
    value: "grooming",
    label: "Grooming",
  },
  {
    value: "training",
    label: "Training",
  },
  {
    value: "feeding",
    label: "Feeding",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const statuses = [
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in_progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "missed",
    label: "Missed",
    icon: CrossCircledIcon,
  },
];
