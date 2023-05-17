
import ReactMarkdown from 'react-markdown';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import regeneratorRuntime from 'regenerator-runtime';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFeatherAlt, FaPaperPlane } from 'react-icons/fa';

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default function ContactForm({endpoint}) {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const checkData = data;
    const csrftoken = getCookie('csrftoken');
    const conf = {
      method: 'POST',
      mode: 'same-origin',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      }),
    };
    fetch(endpoint, conf).then((response) => console.log(response));
    navigate('/confirmation');
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          size="lg"
          placeholder="Name here"
          {...register("name", {
            required: 'This is a required field.',
              pattern: {
                value: /^[a-zA-Z -.]{2,30}$/,
                message:
                  'Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please.',
              },
            })}
        />
        <Form.Text>
          Please leave your name so you can be contacted.
        </Form.Text>
        <p style={{ color: 'palegreen' }}>
          {errors.name && errors.name.message}
        </p>
        <br />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          size="lg"
          placeholder="Enter email"
          {...register("email", {
            required: 'This is a required field.',
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email submitted in an email pattern.',
            },
          })}
        />
        <Form.Text>
          Please leave your email so you can be contacted.
        </Form.Text>
        <p style={{ color: 'palegreen' }}>
          {errors.email && errors.email.message}
        </p>
        <br />
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <p>You can use up to 10,000 characters.</p>
        <Form.Control
          type="textarea"
          as="textarea"
          rows="5"
          size="lg"
          {...register("messageinput", { required: 'This is a required field.' })}
        />
        <p style={{ color: 'palegreen' }}>
          {errors.messageinput && errors.messageinput.message}
        </p>
        <br />
      </Form.Group>
      <div align="center">
        <button className="btn-blue-green">
          Submit Your Message <FaPaperPlane />
        </button>
      </div>
    </Form>
  );
}
