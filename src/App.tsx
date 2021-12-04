import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import { users, integrations } from './Data/data';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { MenuItem } from './types/Data';
import { BiPlus, BiSearch } from 'react-icons/bi';

const App = (() => {
  const [showMenu, setShowMenu] = useState(false);
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [filterUser, setFilterUser] = useState<MenuItem[]>(users.item);
  const [filterIntegration, setFilterIntegration] = useState<MenuItem[]>(
    integrations.item
  );
  const [selectedItem, setSelectedItem] = useState<MenuItem[]>([]);
  //this function toggles between which data to show
  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'users') {
      setShowUsers(true);
      setShowIntegrations(false);
    } else if (e.target.value === 'integrations') {
      setShowIntegrations(true);
      setShowUsers(false);
    }
  };

  useEffect(() => {
    console.log(filterUser);
  });

  useEffect(() => {
    const result: any = users.item.filter((item) =>
      item.name.toLocaleLowerCase().includes(search)
    );
    setFilterUser(result);
  }, [search]);

  useEffect(() => {
    const result: any = integrations.item.filter((item) =>
      item.name.toLocaleLowerCase().includes(search)
    );
    setFilterIntegration(result);
  }, [search, showIntegrations]);

  const renderUser = () => {
    return filterUser.map((item) => (
      <Card item={item} onClick={() => {}} key={item.id} />
    ));
  };
  const renderIntegration = () => {
    return filterIntegration.map((item) => (
      <Card item={item} onClick={() => {}} key={item.id} />
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button onClick={() => setShowMenu(!showMenu)}>
          <BiPlus style={{ height: 20, width: 20 }} /> <span>Add filter</span>
        </Button>
      </div>
      <div className={styles.dropdownContainer}>
        {showMenu && (
          <Dropdown visible={showMenu} onClick={toggle}>
            <>
              <SearchBar
                icon={
                  <BiSearch
                    style={{ height: 20, width: 20, color: '#818181' }}
                  />
                }
                name="searchbar"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeHolder="Search Options"
              />
              {showUsers ? renderUser() : renderIntegration()}
            </>
          </Dropdown>
        )}
      </div>
    </div>
  );
}) as React.FC;

export default App;
