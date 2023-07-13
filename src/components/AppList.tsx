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
} from '@ionic/react';

import {
  calculator,
  syncCircleOutline,
  readerOutline,
  language,
  logoYoutube,
} from 'ionicons/icons';

const AppList: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>App List</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton expand="block" color={'dark'} routerLink="/calculator">
          Calculator
          <IonIcon icon={calculator} slot="end"></IonIcon>
        </IonButton>
        <IonButton
          expand="block"
          className="ion-margin-top"
          color={'dark'}
          routerLink="/chartranslater"
        >
          Char Transalater
          <IonIcon icon={syncCircleOutline} slot="end"></IonIcon>
        </IonButton>
        <IonButton
          expand="block"
          className="ion-margin-top"
          color={'dark'}
          routerLink="/multiplier"
        >
          Multiplier
          <IonIcon icon={readerOutline} slot="end"></IonIcon>
        </IonButton>
        <IonButton
          expand="block"
          className="ion-margin-top"
          color={'dark'}
          routerLink="/video"
        >
          Video
          <IonIcon icon={logoYoutube} slot="end"></IonIcon>
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default AppList;
