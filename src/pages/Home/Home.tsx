import React, { useState } from 'react';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { users, integrations, data } from '../../data/data';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { MenuItem } from '../../types/Data';
import { BiPlus, BiSearch } from 'react-icons/bi';
import Tag from '../../components/Tag/Tag';

const Home = (() => {
  const [showMenu, setShowMenu] = useState(false);
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [filterUser, setFilterUser] = useState<MenuItem[]>(users.item);
  const [filterIntegration, setFilterIntegration] = useState<MenuItem[]>(
    integrations.item
  );
  const [selectedItem, setSelectedItem] = useState<MenuItem[]>([]);

  // Search function for the users
  useEffect(() => {
    const result: any = users.item.filter((item) =>
      item.name.toLocaleLowerCase().includes(search)
    );
    setFilterUser(result);
  }, [search]);

  // Search function for the integrations
  useEffect(() => {
    const result: any = integrations.item.filter((item) =>
      item.name.toLocaleLowerCase().includes(search)
    );
    setFilterIntegration(result);
  }, [search, showIntegrations]);

  //this function toggles between which data to show
  useEffect(() => {
    const existingItems = localStorage.getItem('tag');
    setSelectedItem(existingItems ? JSON.parse(existingItems) : []);
  }, []);

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'Users') {
      users.isSelected = true;
      integrations.isSelected = false;
      setShowUsers(true);
      setShowIntegrations(false);
    } else if (e.target.value === 'Integrations') {
      setShowIntegrations(true);
      setShowUsers(false);
      integrations.isSelected = true;
      users.isSelected = false;
    } else {
      users.isSelected = true;
      setShowUsers(true);
    }
  };

  const renderUser = () => {
    return filterUser.map((item: MenuItem) => (
      <Card
        item={item}
        selected={item.isSelected}
        onClick={() => addItem(item)}
        key={item.id}
      />
    ));
  };

  const renderIntegration = () => {
    return filterIntegration.map((item: MenuItem) => (
      <Card
        item={item}
        onClick={() => {
          addItem(item);
        }}
        selected={item.isSelected}
        key={item.id}
      />
    ));
  };

  const addItem = (item: MenuItem) => {
    if (item.isSelected === true) return;
    item.isSelected = true;
    const next = [...selectedItem, item];
    setSelectedItem(next);
    localStorage.setItem('tag', JSON.stringify(next));
  };

  const removeItem = (index: number) => {
    const items = [...selectedItem];
    items.splice(index, 1);
    setSelectedItem(items);
    localStorage.setItem('tag', JSON.stringify(items));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button onClick={() => setShowMenu(!showMenu)}>
          <BiPlus style={{ height: 20, width: 20 }} /> <span>Add filter</span>
        </Button>
      </div>
      {showMenu && (
        <>
          <div className={styles.dropdownContainer}>
            <Dropdown data={data} onClick={toggle}>
              <div className={styles.searchBarContainer}>
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
              </div>
              {showUsers ? renderUser() : renderIntegration()}
            </Dropdown>
          </div>
          <div className={styles.tagContainer}>
            {selectedItem.map((item, index) => (
              <Tag key={index} onClick={() => removeItem(index)} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}) as React.FC;

export default Home;
