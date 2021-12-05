import React, { useState } from 'react';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { users, integrations, data } from '../../Data/data';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { MenuItem } from '../../types/Data';
import { BiPlus, BiSearch } from 'react-icons/bi';
import Tag from '../../components/Tag/Tag';

const Home = (() => {
  const [showMenu, setShowMenu] = useState(false);
  // These states that is responsible for which data to show
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  //This state responsible for the searchbar component
  const [search, setSearch] = useState<string>('');
  //These states will show a list of data that contains the characters of the search state
  const [filteredUsers, setFilteredUsers] = useState<MenuItem[]>(users.item);
  const [filteredIntegrations, setFilteredIntegrations] = useState<MenuItem[]>(
    integrations.item
  );
  //This state is the array that will hold the selected items
  const [selectedItem, setSelectedItem] = useState<MenuItem[]>([]);

  // Search function for the users
  useEffect(() => {
    const result: any = users.item.filter((item) =>
      item.name.toLocaleLowerCase().includes(search)
    );
    setFilteredUsers(result);
  }, [search]);

  // Search function for the integrations
  useEffect(() => {
    const result: any = integrations.item.filter((item) =>
      item.name.toLocaleLowerCase().includes(search)
    );
    setFilteredIntegrations(result);
  }, [search, showIntegrations]);

  //This useffect will get the items from the local storage if there
  //is any data
  useEffect(() => {
    const existingItems = localStorage.getItem('tag');
    setSelectedItem(existingItems ? JSON.parse(existingItems) : []);
  }, []);

  //This function toggles between which data to show
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

  //Renders the user items
  const renderUser = () => {
    return filteredUsers.map((item: MenuItem) => (
      <Card
        item={item}
        selected={compareArray(item)}
        onClick={() => addItem(item)}
        key={item.id}
      />
    ));
  };

  //Renders the integration items
  const renderIntegration = () => {
    return filteredIntegrations.map((item: MenuItem) => (
      <Card
        item={item}
        onClick={() => {
          addItem(item);
        }}
        selected={compareArray(item)}
        key={item.id}
      />
    ));
  };

  //Will save and add the items to the localstorage
  //and the selectedItem state
  const addItem = (item: MenuItem) => {
    if (item.isSelected === true) return;
    item.isSelected = true;
    const next = [...selectedItem, item];
    setSelectedItem(next);
    localStorage.setItem('tag', JSON.stringify(next));
  };

  //Will remove from localstorage and selected item state
  const removeItem = (index: number) => {
    const items = [...selectedItem];
    items.splice(index, 1);
    setSelectedItem(items);
    localStorage.setItem('tag', JSON.stringify(items));
  };

  //compares the selected item array and the filter arrays
  const compareArray = (item: MenuItem) => {
    if (selectedItem.some((item2) => item2.name === item.name)) {
      return (item.isSelected = true);
    } else {
      item.isSelected = false;
    }
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
