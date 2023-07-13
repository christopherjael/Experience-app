import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
} from '@ionic/react';

import {
  calculator,
  syncCircleOutline,
  readerOutline,
  language,
  trash,
} from 'ionicons/icons';
import { useState } from 'react';

const Calculator: React.FC = () => {
  const [num1, setnum1] = useState<number>(0);
  const [num2, setnum2] = useState<number>(0);
  const [result, setresult] = useState<number>(0);

  const handleInputChangeNum1 = (event: any) => {
    setnum1(Number.parseInt(event.target.value));
  };

  const handleInputChangeNum2 = (event: any) => {
    setnum2(Number.parseInt(event.target.value));
  };

  const cleanInputs = (event: any) => {
    setnum1(0);
    setnum2(0);
    setresult(0);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    setresult(num1 + num2);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Plus++</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <form onSubmit={onSubmit}>
          <IonInput
            className={'ion-margin-bottom'}
            fill="outline"
            labelPlacement="floating"
            label="Number 1"
            type="number"
            defaultValue={0}
            id="input-number1"
            value={num1}
            onInput={handleInputChangeNum1}
          ></IonInput>
          <IonInput
            fill="outline"
            labelPlacement="floating"
            label="Number 2"
            type="number"
            defaultValue={0}
            id="input-number2"
            value={num2}
            onInput={handleInputChangeNum2}
          ></IonInput>
          <IonToolbar>Result: {result}</IonToolbar>
          <IonButton type="submit" expand="block" className={'ion-margin-top'}>
            Calculate
          </IonButton>
          <IonButton
            type="button"
            expand="block"
            className={'ion-margin-top'}
            color={'warning'}
            onClick={cleanInputs}
          >
            Clean
            <IonIcon icon={trash} slot="end"></IonIcon>
          </IonButton>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default Calculator;
