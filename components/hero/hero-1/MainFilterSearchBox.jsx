import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SelectField from "./SelectField";
import styles from "./MainFilterSearchBox.module.css";

const   MainFilterSearchBox = () => {
  const firstFieldOptions = [
    { id: 1, name: "Option 1", nome_subcategory: "CANANEIA" },
    { id: 2, name: "Option 2", nome_subcategory: "ILHA COMPRIDA" },
    { id: 3, name: "Option 2", nome_subcategory: "IGUAPE" },
    { id: 4, name: "Option 2", nome_subcategory: "PARIQUERA AÇU" },
  ];

  const secondFieldOptions = [
    { id: 1, nome_subcategory: "ATRATIVOS" },
    { id: 3, nome_subcategory: "ROTEIROS E PASSEIOS" },
    { id: 4, nome_subcategory: "ONDE SE HOSPEDAR" },
    { id: 5, nome_subcategory: "ONDE COMER" },
    { id: 6, nome_subcategory: "AGENDA DE EVENTOS" },
    { id: 8, nome_subcategory: "SERVIÇOS" },
    { id: 11, nome_subcategory: "NATUREZA E CULTURA" },
  ];

  const [thirdFieldOptions, setThirdFieldOptions] = useState([]);
  const [selectedFirstField, setSelectedFirstField] = useState("");
  const [selectedSecondField, setSelectedSecondField] = useState("");
  const router = useRouter();

  const handleFirstFieldChange = (selectedId) => {
    setSelectedFirstField(selectedId);
    setThirdFieldOptions([]);
    setSelectedSecondField("");
  };

  useEffect(() => {
    if (selectedFirstField && selectedSecondField) {
      fetch(`http://192.168.1.4:8083/api/subCategories/${selectedFirstField}/${selectedSecondField}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.length > 0) {
              setThirdFieldOptions(data[0]);
            } else {
              setThirdFieldOptions([]);
            }
          })
          .catch((error) => {
            console.error("Error fetching third field options:", error);
            setThirdFieldOptions([]);
          });
    } else {
      setThirdFieldOptions([]);
    }
  }, [selectedFirstField, selectedSecondField]);

  const handleSecondFieldChange = (selectedId) => {
    setSelectedSecondField(selectedId);
  };

  const handleSearch = () => {
    if (selectedFirstField && selectedSecondField) {
      router.push(`/content-list/list-v1?firstField=${selectedFirstField}&secondField=${selectedSecondField}`);
    } else {
      alert("Por favor, selecione os campos primeiro e segundo antes de pesquisar.");
    }
  };

  return (
      <div className={styles.mainFilterSearchBox}>
        <div className={styles.mainFilterSearchBox__container}>
          <SelectField
              options={firstFieldOptions}
              label="Destinos"
              selectedOption={selectedFirstField}
              onChange={handleFirstFieldChange}
              disabled={false}
          />
          <SelectField
              options={secondFieldOptions}
              label="Experiências"
              selectedOption={selectedSecondField}
              onChange={handleSecondFieldChange}
              disabled={!selectedFirstField}
          />
          <SelectField
              options={thirdFieldOptions}
              label="Atrativos"
              selectedOption=""
              onChange={() => {}}
              disabled={!selectedSecondField}
          />
          <div className={styles.mainFilterSearchBox__button}>
            <button
                className={styles.mainFilterSearchBox__submitButton}
                onClick={handleSearch}
            >
              <i className={`icon-search ${styles.iconSearch}`} />
              Pesquisar
            </button>
          </div>
        </div>
      </div>
  );
};

export default MainFilterSearchBox;
