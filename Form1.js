import React from 'react';
import { Button, Modal, Form, input } from 'react-bootstrap';





export const Form1 = () => (
    
    
    <>
 
        <h1 style ={{padding:'10px'}}>Форма заказа</h1>
     
        <Form style ={{padding:'10px'}}>
            

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName">ФИО</label>
                    <input type="Name" class="form-control" id="inputFIO" placeholder="" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Телефон</label>
                    <input class="form-control" id="inputPhone" />
                </div>
            </div>
            <div class="form-group col-md-6">
                <label for="inputAddress">Адрес</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Например : г.Рязань ул.Полетаева д.30 к.214" />
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="text" class="form-control" id="inputEmail" placeholder="" />
            </div>
                <div class="form-group col-md-4">
                    <label for="inputProduct">Устройство</label>
                    <select id="inputState" class="form-control">
                        <option selected>Выбрать</option>
                        <option>Iphone 13 Pro Max 256gb</option>
                        <option>AirPods</option>
                        <option>AirPods 3</option>
                        <option>Mi 10 Pro Max 128gb</option>
                        <option>Mi 12 128gb</option>
                        <option>Iphone 13 Pro 128gb</option>
                    </select>
                </div>
            

            <button type="submit" class="f-button f-button - warning" >Заказать</button>

        </Form>

        

    </>
)
export default Form1;