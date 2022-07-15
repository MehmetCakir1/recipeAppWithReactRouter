import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  OtherPart,
  IngContainer,
} from "../pages/Details.styled";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <DetailContainer>
      <HeaderContainer>{state.label}</HeaderContainer>
      <DetailPart wrap="wrap">
        <OtherPart>
          <h4>NUTRIENTS</h4>
          <div>
            <p>
              <b>{state.totalNutrients.CA.label} : </b>{" "}
              {Math.round(state.totalNutrients.CA.quantity)}{" "}
              {state.totalNutrients.CA.unit}
            </p>
            <p>
              <b>{state.totalNutrients.CHOCDF.label} : </b>{" "}
              {Math.round(state.totalNutrients.CHOCDF.quantity)}{" "}
              {state.totalNutrients.CHOCDF.unit}
            </p>
            <p>
              <b>{state.totalNutrients.CHOLE.label} : </b>{" "}
              {Math.round(state.totalNutrients.CHOLE.quantity)}{" "}
              {state.totalNutrients.CHOLE.unit}
            </p>
            <p>
              <b>{state.totalNutrients.ENERC_KCAL.label} :</b>{" "}
              {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}{" "}
              {state.totalNutrients.ENERC_KCAL.unit}
            </p>
          </div>
          <p>
            <b>Total Weight : </b> {state.totalWeight.toFixed(3)}
          </p>
          <p>
            <b>Calories: </b> {Math.round(state.calories)}
          </p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              <b>{item.label} : </b> {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={state.image} alt="" />
        </ImgContainer>
      </DetailPart>
      <IngContainer>
        <h2>INGREDIENTS</h2>
        <br />
        {state.ingredientLines.map((line, index) => (
          <div key={index}>
            <p>
              {index + 1} - {line}
            </p>
            <br />
          </div>
        ))}
      </IngContainer>
    </DetailContainer>
  );
};

export default Details;
