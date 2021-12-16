import styled from "styled-components";

export const ContactSection = styled.div`
        padding: 50px;
        text-align: center;

`
export const ContactTitle = styled.h2`
        font-size: 60px;
        margin-bottom: 80px;
`
export const Span = styled.span`
        font-weight: normal;
        color: #eb5424;
`
export const Form = styled.form`
        width: 80%;
        margin: auto;
`
export const FormInput = styled.div`
       overflow: hidden;
`
export const Input = styled.input`
        box-sizing: border-box;
        outline: none;
        padding: 9px;
        margin-bottom: 25px;
`

export const InputText = styled(Input)`
        float: left;
        width: 49%;
`
export const InputEmail = styled(Input)`
        float: right;
        width: 49%;
`
export const InputSub = styled(Input)`
      width: 100%;
`

export const Textarea = styled.textarea`
            width: 100%;
            outline: 0;
            padding: 10px;
            background: #ccc;
`
export const Button = styled.button`
            background:#fff;
            padding:10px 30px;
            color:#888;
            margin-top:40px;
            border:1px solid #ccc;
            outline:none
`
