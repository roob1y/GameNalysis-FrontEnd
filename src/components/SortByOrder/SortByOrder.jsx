import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const AccordionContainer = styled.div`
  position: relative;
  max-width: 12em;
  border-radius: 5px;
  margin-right: 4%;
  display: ${props => props.isHidden ? "none" : "inline-block"};
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.buttonColor};
  color: #444;
  cursor: pointer;
  padding: 9px 25px;
  width: 100%;
  border: ${({ theme }) => theme.outline};
  border-radius: 20px;
  font-size: 15px;
  transition: 0.4s;

  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 1100px) {
    padding: 0 25px;
  }
`;

const FilterIcon = styled.div`
  display: none;

  @media (max-width: 1100px) {
    display: block;
    padding: 0 25px;
  }
`;

const AccordionPanel = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -3px);
  border-radius: 20px;
  max-height: 0;
  width: 100%;
  padding: 10px 0;
  background-color: white;
  overflow: auto;
  max-height: 0;
  transition: max-height 0.2s ease-out, opacity 0.2s ease-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  border: ${(props) => (props.isOpen ? ({ theme }) => theme.outline : "none")};
`;

const HeaderTitle = styled.p`
  font-weight: bold;
  margin: 0;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const HeaderIcon = styled.div`
  margin-left: 5px;
  transform: ${(props) => (props.isOpen ? "rotate(0)" : "rotate(180deg)")};
  transition: transform 0.2s ease-out;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-weight: bold;
  cursor: default;
`;

const SortbyOrderOptions = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  background-color: ${(props) => (props.isActive ? "#ddd" : "transparent")};
`;

const SortByOrder = ({ searchParams, setSearchParams, isHidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  function handleSortChange(val) {
    console.log("val: ", val);
    searchParams.set("sort_by", val);
    setSearchParams(searchParams);
  }

  function handleOrderChange(val) {
    searchParams.set("order", val);
    setSearchParams(searchParams);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer isHidden={isHidden} ref={node}>
      <AccordionHeader onClick={handleClick}>
        <FilterIcon>
          <box-icon size="52px" name="filter"></box-icon>
        </FilterIcon>
        <HeaderTitle>Sort and Filter</HeaderTitle>
        <HeaderIcon isOpen={isOpen}>
          <FontAwesomeIcon size={"xs"} icon={faChevronUp} />
        </HeaderIcon>
      </AccordionHeader>
      <AccordionPanel
        isOpen={isOpen}
        style={{ maxHeight: isOpen ? "15em" : "0" }}
      >
        <Title>Sort By</Title>
        <ul>
          <SortbyOrderOptions onClick={() => handleSortChange("created_at")}>
            Date Added
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("comment_count")}>
            Comment Count
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("votes")}>
            Votes
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("designer")}>
            Designer
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleSortChange("owner")}>
            Owner
          </SortbyOrderOptions>
          <br />
        </ul>
        <Title>Order</Title>
        <ul>
          <SortbyOrderOptions onClick={() => handleOrderChange("desc")}>
            Descending
          </SortbyOrderOptions>
          <SortbyOrderOptions onClick={() => handleOrderChange("asc")}>
            Ascending
          </SortbyOrderOptions>
        </ul>
      </AccordionPanel>
    </AccordionContainer>
  );
};

export default SortByOrder;
