import React from 'react'
import './login.css';
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

const Login:React.FC = () => {

  const formik = useFormik({
    initialValues:{
      user:'',
      password:''
    },
    validationSchema: Yup.object({
      user: Yup.string().required("Debe ingresar el usuario").min(5, "El usuario debe tener minimo 5 caracteres"),
      password: Yup.string().required("Debe ingresar la clave").min(6, "La clave debe tener minimo 6 caracteres"),
    }),
    onSubmit:(formValues)=>{
      console.log(formValues)
      
    }
  });

  console.log(formik.touched)

  return (
    
    <>
    <div className='login-container'>
  
        <IonInput placeholder='Digite el usuario' className='ion-padding login-margin' label="Usuario" labelPlacement="floating" fill="outline"
          onIonChange={(e) => formik.setFieldValue("user", e.detail.value)}
          onIonBlur={formik.handleBlur}
          name='user'
        />
        {
          formik.touched.user && formik.errors.user && <IonLabel className='login-error'>{formik.errors.user}</IonLabel>
        }

        <IonInput placeholder='Digite la clave' className='ion-padding login-margin' label="Clave" labelPlacement="floating" fill="outline"
          onIonChange={(e) => formik.setFieldValue("password", e.detail.value)}
          onIonBlur={formik.handleBlur}
          name='password'
          type='password'
        />
 
        {
          formik.touched.password && formik.errors.password && <IonLabel className='login-error'>{formik.errors.password}</IonLabel>
        }
        <IonButton fill='outline' expand='block' shape="round" className='login-margin'
          onClick={() => formik.handleSubmit()}
        >Ingresar</IonButton>

        <IonItem routerLink='/register'>
          <IonLabel className='login-margin login-register'>Registrarse</IonLabel>
        </IonItem>
        
    </div>
      
    </>
  )
}

export default Login