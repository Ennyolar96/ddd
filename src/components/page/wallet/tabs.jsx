import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./styles.css";
import Activity from "./activity";
import Wallet from "./wallet";

export default function WalletTab() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Wallet</Tab>
          <Tab>Activity</Tab>
        </TabList>
        <TabPanel>
          <Wallet />
        </TabPanel>
        <TabPanel>
          <Activity />
        </TabPanel>
      </Tabs>
    </div>
  );
}
