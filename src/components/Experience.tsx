import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import ExperienceModel from '../model/ExperienceModel';

const Experience: React.FC<ExperienceModel> = ({
  id,
  title,
  description,
  photo,
  audio,
}) => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>Task ID: {id}</IonCardSubtitle>
      <IonCardTitle>{title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>{description}</IonCardContent>
  </IonCard>
);

export default Experience;
