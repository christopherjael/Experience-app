import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

interface TaskProps {
  id: string;
  title: string;
  description: string;
}

const Experience: React.FC<TaskProps> = ({ id, title, description }) => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>Task ID: {id}</IonCardSubtitle>
      <IonCardTitle>{title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>{description}</IonCardContent>
  </IonCard>
);

export default Experience;
