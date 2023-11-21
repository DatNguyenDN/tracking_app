import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'semantic-ui-react';
import './App.css';

const App = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Your submission has been sent !")
    window.location.reload();
  }

  return (
    <div className='app'>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
                    <div className='heading'><h1>Tracking App</h1></div>
                    <label>First Name</label>
                    <input
                        placeholder='First Name' 
                        type="text"
                        name='firt_name'                      
                        {...register('firstName',{required:true, maxLength: 20})}
                        
                    />
                    {errors.firstName &&
                      <p className='ui negative mini message'>Name is required and less than 20 charactres</p>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                        placeholder='Last Name' 
                        type="text" 
                        name='last_name'
                        {...register('lastName',{required:true})}
                            
                    />
                    {
                      errors.lastname && 
                      <p className="ui negative mini message">Last name is requireds</p>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input 
                        placeholder='Email' 
                        type="email" 
                        name='email_address'
                        {...register('email', {required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                    />
                    {errors.email && 
                        <p className="ui negative mini message">Enter a valid email address</p>
                    }
                </Form.Field>
                <Form.Field>
                    <label htmlFor="websiteUrl" >Url</label>
                    <input 
                              type="text"
                              placeholder='Website Url'  
                              name='website_url'                                
                               {...register("url", {required:true,
                                pattern:/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
                              })}
                               
                    />
                     {errors.url && <p className="ui negative mini message">Enter a valid url address</p>}
                </Form.Field>

                <Button variant="raised" color="primary" >Submit</Button>
      </Form>
    </div>
  )
}

export default App
