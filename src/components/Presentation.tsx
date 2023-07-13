import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
} from '@ionic/react';

const Presentation: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Christopher Montero D' oleo</IonCardTitle>
        <IonCardSubtitle>
          Matricula: 2021-0622
          <br />
          Email: 20210622@itla.edu.do
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <div className="ion-text-center">
          <img width={'50%'} src="../../resources/img/Profile.jpg"></img>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Presentation;
