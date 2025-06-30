import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styles from "../../styles/ui/Tabs.module.css";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef((props, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={`${styles.tabsList} ${props.className || ""}`}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef((props, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={`${styles.tabsTrigger} ${props.className || ""}`}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef((props, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={`${styles.tabsContent} ${props.className || ""}`}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
