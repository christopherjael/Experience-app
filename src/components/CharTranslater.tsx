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

const CharTranslater: React.FC = () => {
  //const [numero, setNumero] = useState<number | undefined>(undefined);
  //const [resultado, setResultado] = useState<string>('');

  const Unidad = [
    '',
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve',
  ];
  const Decena = [
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciséis',
    'diecisiete',
    'dieciocho',
    'diecinueve',
  ];
  const Decenas = [
    '',
    '',
    'veinte',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa',
  ];
  const Centenas = [
    '',
    'ciento',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos',
  ];

  function NumeroALetras(numero: number): string {
    if (numero === 0) {
      return 'cero';
    }

    if (numero < 10) {
      return Unidad[numero];
    }

    if (numero < 20) {
      return Decena[numero - 10];
    }

    if (numero < 100) {
      const unidades = numero % 10;
      const decenas = Math.floor(numero / 10);
      return `${Decenas[decenas]} y ${Unidad[unidades]}`;
    }

    if (numero < 1000) {
      const centenas = Math.floor(numero / 100);
      const resto = numero % 100;
      return `${Centenas[centenas]} ${NumeroALetras(resto)}`;
    }

    if (numero === 1000) {
      return 'mil';
    }

    return '';
  }

  const [numero, setNumero] = useState<number>(0);
  const [resultado, setResultado] = useState<string>('');

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    setNumero(value);
    console.log(numero);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const letras = NumeroALetras(numero);
    console.log(letras);
    setResultado(letras);
  };

  const cleanInputs = (event: any) => {
    setNumero(0);
    setResultado('');
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Plus++</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <form onSubmit={handleSubmit}>
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

          <IonToolbar>In Text: {resultado}</IonToolbar>

          <IonButton
            type="submit"
            expand="block"
            className={'ion-margin-top'}
            //onClick={convertirNumero}
          >
            Translate
            <IonIcon icon={syncCircleOutline} slot="end"></IonIcon>
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

export default CharTranslater;
