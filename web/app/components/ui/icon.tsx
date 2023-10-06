import {
  AppWindow,
  Circle,
  Cloud,
  Components,
  DashboardSpeed,
  Database,
  DbSearch,
  Group,
  Home,
  InfoEmpty,
  InputSearch,
  JournalPage,
  LayoutLeft,
  MediaImageList,
  MultiplePages,
  PageEdit,
  PageSearch,
  PageStar,
  UserCrown,
} from "~/icons";

/**
 * Icon Component
 *
 * For automated icon display with name props.
 * Works by mapping the name string with like a switch case.
 * Only used when need to determine icon based on the item name from data.
 */

export const iconMaps = {
  default: <Circle />,
  about: <InfoEmpty />,
  appWindow: <AppWindow />,
  components: <Components />,
  dashboard: <DashboardSpeed />,
  database: <Database />,
  demo: <LayoutLeft />,
  home: <Home />,
  noteCategory: <PageSearch />,
  notes: <MultiplePages />,
  noteStatus: <PageStar />,
  noteTag: <PageEdit />,
  search: <InputSearch />,
  searchAdmin: <DbSearch />,
  site: <Cloud />,
  userRole: <UserCrown />,
  users: <Group />,
  images: <MediaImageList />,
  noteImage: <JournalPage />,
};

export function lookupIcon(lookupObject: any, defaultCase = "default") {
  return (expression: string | number) => {
    return lookupObject[expression] || lookupObject[defaultCase];
  };
}

export const iconSwitch = lookupIcon(iconMaps, "default");

export function Icon({ name = "default" }: { name?: string }) {
  return iconSwitch(name);
}
