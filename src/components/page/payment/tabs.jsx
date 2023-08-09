import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Airtime from "./airtime";
import Data from "./data";
import Cable from "./cable";
import Bills from "./bills";

export default function PaymentTab() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Airtime</Tab>
          <Tab>Data</Tab>
          <Tab>Cable</Tab>
          <Tab>Bills</Tab>
        </TabList>
        <TabPanel>
          <Airtime />
        </TabPanel>
        <TabPanel>
          <Data />
        </TabPanel>
        <TabPanel>
          <Cable />
        </TabPanel>
        <TabPanel>
          <Bills />
        </TabPanel>
      </Tabs>
    </div>
  );
}
