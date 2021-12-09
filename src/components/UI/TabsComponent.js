import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { RegisterForm } from '../Layout/RegisterForm';

import './TabsComponent.css';

export const TabsComponent = () => {


    return (
        <Tabs>
            <TabList>
                <Tab>Current Teams</Tab>
                <Tab>Register Team</Tab>
            </TabList>
        
            <TabPanel>
                <h4>Idea 1</h4>
                <h3>Team members</h3>
            </TabPanel>
            <TabPanel>
                <h4>Register Team</h4>
                <RegisterForm />
            </TabPanel>
        </Tabs>
    )
}
