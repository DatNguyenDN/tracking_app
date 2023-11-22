import React from 'react';
import { useForm } from "react-hook-form";
import { Form } from 'semantic-ui-react';
import './TrackingApp.css'

const TrackingApp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      alert("Your submission has been sent !")
      window.location.reload();
    }
  
    return (
      <div className='tracking-app'>
        
        <Form onSubmit={handleSubmit(onSubmit)} >
          <div className='heading'><h1>Tracking App</h1></div>
  
                  <Form.Field className='form' >
                      <label></label>
                      <input
                          className='form-input'
                          // style={{'border-radius': '50px'}}
                                                
                          placeholder='Email' 
                          type="text" 
                          {...register('email', {required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                      />
                      {errors.email && 
                          <div className="errors-mess" style={{'color':'red'}}>Enter a valid email address</div>
                      }
                  </Form.Field>
                  <Form.Field >
                      <label htmlFor="websiteUrl" ></label>
                      <input    
                                type="text"
                                className='form-input'
                                placeholder='Website Url'                                                               
                                 {...register("url", {required:true,
                                  pattern:/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
                                })}
                                 
                      />
                       {errors.url && <div className="errors-mess" style={{'color':'red'}} >Enter a valid url address</div>}
                  </Form.Field>
                  <div className='submit-btn'>
                    <button>Submit</button>
                  </div>
                  {/* <Button variant="raised" color="primary" >Submit</Button> */}
        </Form>
      </div>
    )
}

export default TrackingApp
