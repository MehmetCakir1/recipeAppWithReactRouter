import {useNavigate} from "react-router-dom";
import Div,{RecipeDiv,Image,Header,Button} from "../components/RecipeCardStyled"
import defaultImg from "../assets/default-image.jpg"

const RecipeCard = ({recipes}) => {
  const navigate = useNavigate()
  return (
    <Div wrap="wrap">
        {recipes.map(({recipe},index)=>{
          return(
            <RecipeDiv key={index}>
              <Header>{recipe.label}</Header>
              <Image src={recipe.image ?  recipe.image : defaultImg }/>
              <Button onClick={()=>
                navigate("/details" , {state:recipe,replace:false})
                }
                >
                  View More
                  </Button>
            </RecipeDiv>
          )
        })}
    </Div>
  )
}

export default RecipeCard