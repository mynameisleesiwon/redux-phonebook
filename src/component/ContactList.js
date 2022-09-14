import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      // keyword가 들어간 이름들로 이뤄진 새로운 배열 반환하기
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        연락처 수 : {contact.length}
        {filteredList.map((item) => (
          <ContactItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
