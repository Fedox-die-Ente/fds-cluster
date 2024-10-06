import { BarChart3, FileText, LayoutGrid, Settings, ShoppingCart, Users } from "lucide-react";

export type SidebarItemType = {
	icon: React.ElementType;
	title: string;
	path?: string;
	items?: SidebarItemType[];
};

export type SidebarCategoryType = {
	title: string;
	items: SidebarItemType[];
};

export type SidebarConfigItemType = SidebarItemType | SidebarCategoryType;

export type SidebarConfigType = SidebarConfigItemType[];

export const sidebarConfig: SidebarConfigType = [
	{
		icon: LayoutGrid,
		title: "Dashboard",
		path: "/dashboard"
	},
	{
		title: "Content",
		items: [
			{
				icon: FileText,
				title: "Layout",
				items: [
					{ icon: FileText, title: "Grid", path: "/layout/grid" },
					{ icon: FileText, title: "Flex", path: "/layout/flex" }
				]
			},
			{
				icon: FileText,
				title: "Form Button",
				path: "/form-button"
			},
			{
				icon: FileText,
				title: "UI Elements",
				path: "/ui-elements"
			}
		]
	},
	{
		icon: BarChart3,
		title: "Charts",
		path: "/charts"
	},
	{
		title: "Management",
		items: [
			{ icon: Users, title: "Users", path: "/users" },
			{ icon: ShoppingCart, title: "Products", path: "/products" },
			{ icon: Settings, title: "Settings", path: "/settings" }
		]
	}
];
