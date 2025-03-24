import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { MaterialEditorForm } from "./MaterialEditorForm/MaterialEditorForm";
import { MaterialList } from "./MaterialList/MaterialList";
import * as API from "../../services/material-api";

export class MaterialApp extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async (values) => {
    try {
      const material = await API.addMaterial(values);
      this.setState((prevState) => ({
        materials: [...prevState.materials, material],
      }));
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async (id) => {
    try {
      const material = await API.deleteMaterial(id);
      this.setState((prevState) => ({
        materials: prevState.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState((prevState) => ({
        materials: prevState.materials.map((material) =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;

    return (
      <Layout>
        <GlobalStyle />
        {error && (
          <p>Ooops! Something went wrong. Reload the page and try again.</p>
        )}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          "LOADING..."
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </Layout>
    );
  }
}
