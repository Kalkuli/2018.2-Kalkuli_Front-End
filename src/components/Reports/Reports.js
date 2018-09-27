import React, {Component} from 'react'
import './Reports.scss'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report'

const info = {
    fakeData: {
        "report": [{
            "period": "01/09/2018 - 30/09/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'zz.zzz.zzz/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],

        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'yy.yyy.yyy/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        },
        { 
            "period": "22/09/2018 - 22/10/2018",
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'yy.yyy.yyy/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }],
            
        }
    ]
    }
}

var position = 0;
var type = "cancel";

class Reports extends Component {

    render() {

        return(
            <div className="reports">
                <Navbar/>
                <div className="reports__area">
                    <div className="reports__area__resumes">
                        {info.fakeData.report.map((data, index) => {
                            if(position === index){
                                type = "confirm";
                            }
                            else{
                                type = "cancel";
                            }
                            return(
                                <BaseButton size="medium" type={type} click={() => {this.onConfirmHandler(index)}} >{data.period}</BaseButton>
                            )
                        })}
                    </div>
                    <Report data={info.fakeData.report[position].receipts}/>
                </div>
                <div className="reports__button">
                    <BaseButton size="small" type="delete" click={this.onDeleteHandler}>Deletar</BaseButton>
                </div>
            </div>
        )
    }

    onConfirmHandler = (index) => {
        position = index
        this.forceUpdate()
    }

    onDeleteHandler = () => {

    }
}

export default Reports