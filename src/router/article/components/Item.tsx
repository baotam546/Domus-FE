import React from "react";
import {
    Arrow,
    ArticleTitle,
    Author,
    CategoryCard,
    DateTime,
    Item,
    StyledLink,
    Thumbnail,
    ThumbnailContainer,
    TitleContainer,
} from "../styled";
import type { ArticleItem } from "../types";
import { slideInFromTop } from "@/utils/motion";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
interface ItemProps {
    item: ArticleItem;
}

const ArticleItem: React.FC<ItemProps> = (props) => {
    return (
        <Item variants={slideInFromTop}>
            <StyledLink to={`/article/${props.item.id}`}>
                <ThumbnailContainer>
                    <Thumbnail src={props.item.images[0]} />
                    <CategoryCard>{props.item.category}</CategoryCard>
                </ThumbnailContainer>
                <TitleContainer>
                    <ArticleTitle>{props.item.title}</ArticleTitle>
                    <Author>by {props.item.author}</Author>
                    <DateTime>
                        {new Date(props.item.createdAt).toDateString()}
                    </DateTime>
                </TitleContainer>

                <Arrow to={`/article/${props.item.id}`}>
                    <MdOutlineKeyboardArrowRight />
                </Arrow>
            </StyledLink>
        </Item>
    );
};

export default ArticleItem;
