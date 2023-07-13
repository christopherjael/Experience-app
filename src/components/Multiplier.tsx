import {
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/react';

import { useState } from 'react';

const Multiplier: React.FC = () => {
  const [numero, setNumero] = useState<number>(1);

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    setNumero(value);
  };

  const renderTabla = () => {
    const tabla = [];
    if (!Number.isInteger(numero) || numero == 0) {
      return 'Number valid greater than zero (0)';
    } else {
      for (let i = 1; i <= 13; i++) {
        const resultado = numero * i;
        tabla.push(
          <tr key={i}>
            <td>{numero}</td>
            <td>x</td>
            <td>{i}</td>
            <td> = </td>
            <td>{'' + resultado}</td>
          </tr>
        );
      }
      return tabla;
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Plus++</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <form>
          <IonGrid>
            <IonRow class="ion-align-items-base">
              <IonCol>
                <IonInput
                  className={'ion-margin-bottom'}
                  fill="outline"
                  labelPlacement="floating"
                  label="Number"
                  type="number"
                  max={1000}
                  min={0}
                  defaultValue={0}
                  id="input-number1"
                  value={numero !== undefined ? numero.toString() : ''}
                  onInput={handleChange}
                ></IonInput>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonToolbar id="resultContainer">{renderTabla()}</IonToolbar>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default Multiplier;
