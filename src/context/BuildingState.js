import BuildingContext from "./BuildingContext"
const BuildingState = (props) => {
    const buildingStructure = {
      name: "",
      blueprint: ""
    };

    const createBuilding = async (building) => {
        let formData = new FormData();
        formData.append('name',building.name);
        formData.append('blueprint', building.blueprint);
        for (const pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
        const resp = await fetch("http://localhost:5000/api/building/createBuilding", {
          method: "POST",
          body: formData,
        });
        const json = await resp.json();
        if (json.success) {
          return json;
        } else {
          return json
        }
      };

      const fetchBuildings = async () =>{
        const resp = await fetch("http://localhost:5000/api/building//buildings",{
          method : "GET"
        });
        const json = await resp.json();
        if (json.success) {
          return json;
        } else {
          return json
        }
      }
  
    return (
      <BuildingContext.Provider value={{ buildingStructure, createBuilding, fetchBuildings }}>
        {props.children}
      </BuildingContext.Provider>
    );
  };
  export default BuildingState;