import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../Context.js";

const PdSearchHeader = styled.div`
  background: #f7f7f7;
  padding: 20px 24px 15px;
  color: #888888;
`;

const PdSearchInfo = styled.div`
  display: flex;
  font-size: 18px;
  padding-bottom: 12px;
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const PdSearchUser = styled.span`
  color: #56aedf;
  text-align: center;
  padding-right: 6px;
  box-sizing: border-box;
  @media only screen and (max-width: 500px) {
    width: 50px;
  }
`;
const PdSearchKeyWord = styled.span`
  color: #56aedf;
  padding: 0 6px;
  width: 70px;
  text-align: center;
`;

const PdSearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 12px;
  background-color: white;
  @media only screen and (max-width: 500px) {
    padding: 7px 6px;
  }
`;

const SearchInput = styled.input`
  padding: 7px 0;
  outline: none;
  width: 100%;
  border: none;
  font-size: 14px;
  margin-left: 15px;
`;

const SearchImg = styled.img`
  cursor: pointer;
  width: 20px;
  @media only screen and (max-width: 500px) {
    width: inherit;
  }
`;

function SearchDetail({ setPdData, setShowOp, showOp }) {
  const [inputSearch, setInputSearch] = useState("");
  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
    axios
      .get(`http://127.0.0.1:8000/search/products?search=${e.target.value}`)
      .then((response) => {
        console.log(response);
        setPdData(response.data.reverse());
      });
  };
  const { user } = useUserContext();

  return (
    <PdSearchHeader>
      <PdSearchInfo>
        {user ? (
          <>
            <PdSearchUser>{user.nickname}</PdSearchUser>
            <span>님이 검색하신 결과</span>
            <PdSearchKeyWord>{inputSearch}</PdSearchKeyWord>
            <span>관련 검색 결과</span>
          </>
        ) : (
          "로그인이 필요합니다"
        )}
      </PdSearchInfo>
      <PdSearchInput>
        <SearchImg
          src={require("../img/filter.png")}
          onClick={() => {
            setShowOp(!showOp);
            console.log(showOp);
          }}
        />
        <SearchInput
          placeholder="검색 조건을 추가해보세요"
          value={inputSearch}
          onChange={handleInputSearch}
        />
        <SearchImg src={require("../img/searchIcon.png")} onClick={() => {}} />
      </PdSearchInput>
    </PdSearchHeader>
  );
}

export default SearchDetail;
