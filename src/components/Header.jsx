import HeaderDiv from "../components/HeaderStyled"
import {H1} from "../components/HeaderStyled"
import {Input} from "../components/HeaderStyled"
import {Select} from "../components/HeaderStyled"
import {Button} from "../components/HeaderStyled"

const Header = ({query,setQuery,setSelectedMeal,mealType,getRecipe}) => {


  const handleSubmit = (e)=>{
    e.preventDefault()
    getRecipe()
  }

  return (
    <HeaderDiv>
       <H1>RECIPE APP</H1>
      <form onSubmit={handleSubmit}>
        <Input
        type="text"
        name='text'
        id='text'
        value={query}
        onChange={(e)=>setQuery(e.target.value)} />

        <Select
        name="selectedMeal" 
        id="selectedMeal"
        onChange={(e)=>setSelectedMeal(e.target.value)}>

          {
            mealType.map((meal,index)=>{
              return(
                <option key={index} value={meal.toLowerCase()}>
                  {meal}
                </option>
              )
            })
          }
        </Select>
        <br />
        <Button type='submit'>Search</Button>
      </form>
    </HeaderDiv>
  )
}

export default Header