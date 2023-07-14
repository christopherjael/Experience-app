import React, { useState, useRef } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonFabButton,
  IonFab,
  IonIcon,
  IonFabList,
  IonModal,
  IonButtons,
  IonItemDivider,
  IonDatetime,
  IonDatetimeButton,
  IonTextarea,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/react';
import Experience from '../components/Experience';
import { v4 as uuidv4 } from 'uuid';
import {
  chevronUpCircle,
  colorPalette,
  document,
  globe,
  add,
  trash,
  create,
  cameraSharp,
  musicalNoteSharp,
  micCircle,
} from 'ionicons/icons';
import DataTable from 'react-data-table-component';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { usePhotoGallery } from '../hook/usePhotoGallery';

interface TaskItem {
  id: string;
  title: string;
  description: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

const HomePage: React.FC = () => {
  /* Media Capture */
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  //ExperienceModal
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const createTask = () => {
    const newTask: TaskItem = {
      id: uuidv4(),
      title: newTaskTitle,
      description: newTaskDescription,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (event: CustomEvent) => {
    setSelectedDate(event.detail.value);
    console.log(selectedDate);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Experiences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>List</h2>
        <IonList>
          {tasks.map((task) => (
            <Experience
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </IonList>
        {/* Experience list */}
        {/* Floting Botom */}
        <IonFab
          vertical="bottom"
          horizontal="center"
          id="open-modal"
          onClick={() => setIsOpen(true)}
        >
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
      {/* modal */}
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add Experience</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form action="" id="form-experience">
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput
                required
                ref={input}
                type="text"
                placeholder="Enter title"
              />
            </IonItem>
            <IonItemDivider />
            <IonItem>
              <IonTextarea
                required
                label="Description"
                labelPlacement="stacked"
                placeholder="Enter description"
              ></IonTextarea>
            </IonItem>
            <IonItemDivider />
            <IonItem>
              <p>Date: </p>

              <IonDatetimeButton
                datetime="date"
                datatype="date"
              ></IonDatetimeButton>

              <IonModal keepContentsMounted={true}>
                <IonDatetime
                  onIonChange={handleDateChange}
                  id="date"
                ></IonDatetime>
              </IonModal>
            </IonItem>
            <IonItemDivider />
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonButton expand="block" onClick={takePhoto}>
                      <IonIcon icon={cameraSharp} />
                      Take photo
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton expand="block">
                      <IonIcon icon={micCircle} />
                      Record Audio
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItemDivider />
            <IonButton expand="block" type="submit">
              <IonIcon icon={add} />
              Create Experience
            </IonButton>
          </form>
        </IonContent>
      </IonModal>
    </IonApp>
  );
};

export default HomePage;
