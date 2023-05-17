import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { connect, useDispatch } from 'react-redux';
import regeneratorRuntime from 'regenerator-runtime';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getFortunes } from '../datacalls/getFortunes';
import { getNameAura } from '../features/nameaura/nameAuraAction';

const FortuneForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getNameAura());
  }, [dispatch]);
  // formState and useForm take care of any useState stuff for the added number
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      auraColor: 'auraOne'
    },
  });

  const { data, status } = useQuery(
    ['fortunes', 'I fetched'],
    getFortunes,
    { retry: true }
  );
  if (status === 'loading') {
    return <p>loading getFortunes</p>;
  }
  if (status === 'error') {
    return <p>Error for specific form</p>;
  }

  let funFortunes = data;
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const randomId = randomNumber(1, (funFortunes.length));

  const onSubmit = (values, e) => {
    e.preventDefault();
    JSON.stringify(values);
    console.log("the stringified values are: ", values);
    dispatch(getNameAura(values));
    navigate('/fortune');
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="show grid text-center">
          <Col className="element-wrapper">
            <label className="legend" htmlFor="name">
              A Name, a Totally Real Name
            </label>
            <br />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="name"
                  size="lg"
                  placeholder="Name here"
                  {...register("name", {
                    required: 'This is a required field (but you can input a fake name)',
                    pattern: {
                      value: /^[a-zA-Z -.]{2,30}$/,
                      message:
                        'Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please.',
                      },
                  })}
                />
                <br />
                <p style={{ color: 'palegreen' }}>
                  {errors.name && errors.name.message}
                </p>
                <br />
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Container className="form-front-page">
              <label className="legend" htmlFor="auraColor">
                Current Aura Color
              </label>
              <fieldset>
                <Row className="mb-3">
                  <Col>
                    <label className="auraOne" aria-label="Peach Pink Aura">
                      <input
                        type="radio"
                        value="auraOne"
                        {...register("auraColor", { required: true })}
                      />
                      <abbr title="Peach Pink Aura">------</abbr>
                    </label>

                    <label className="auraTwo" aria-label="Gold Aura">
                      <input
                        type="radio"
                        value="auraTwo"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Gold Aura">------</abbr>
                    </label>

                    <label className="auraThree" aria-label="Light Spring Green Aura">
                      <input
                        type="radio"
                        value="auraThree"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Light Spring Green Aura">------</abbr>
                    </label>

                    <label className="auraFour" aria-label="Cyan Aura">
                      <input
                        type="radio"
                        value="auraFour"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Cyan Aura" aria-label="Cyan Aura">------</abbr>
                    </label>

                    <label className="auraFive" aria-label="Medium Blue Purple Aura">
                      <input
                        type="radio"
                        value="auraFive"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Medium Blue Purple Aura">------</abbr>
                    </label>
                  </Col>

                  <Col>
                    <label className="auraSix" aria-label="No Aura">
                      <input
                        type="radio"
                        value="auraSix"
                        {...register("auraColor", { required: true })}
                      /><abbr title="No Aura">{' '}
                      What Aura?</abbr>
                    </label>

                    <label className="auraTwelve" aria-label="Dark Gray Aura">
                      <input
                        type="radio"
                        value="auraTwelve"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Dark Gray Aura">------</abbr>
                    </label>

                    <label className="auraThirteen" aria-label="Orange Aura">
                      <input
                        type="radio"
                        value="auraThirteen"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Orange Aura">------</abbr>
                    </label>
                  </Col>

                  <Col>
                    <label className="auraSeven" aria-label="Medium Violet Red Aura">
                      <input
                        type="radio"
                        value="auraSeven"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Medium Violet Red Aura">------</abbr>
                    </label>

                    <label className="auraEight" aria-label="Snow Aura">
                      <input
                        type="radio"
                        value="auraEight"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Snow Aura">------</abbr>
                    </label>

                    <label className="auraNine" aria-label="Lime Green Aura">
                      <input
                        type="radio"
                        value="auraNine"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Lime Green Aura">------</abbr>
                    </label>

                    <label className="auraTen" aria-label="Medium Bright Blue Aura">
                      <input
                        type="radio"
                        value="auraTen"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Medium Bright Blue Aura">------</abbr>
                    </label>

                    <label className="auraEleven" aria-label="Dark Purple Aura">
                      <input
                        type="radio"
                        value="auraEleven"
                        {...register("auraColor", { required: true })}
                      />
                    <abbr title="Dark Purple Aura">------</abbr>
                    </label>
                  </Col>
                </Row>
              </fieldset>
            </Container>
          </Col>
          <Col>
            <br />
            <br />
            <Container className="container-cuttlefish">
              <button
                name="The submit button"
                className="btn-og-circle"
                type="submit"
              >
                FORTUNE
                <br />
                NOW!
              </button>
            </Container>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FortuneForm;




//   const { register, formState: { errors }, handleSubmit } = useForm({
//     defaultValues: {
//       name: 'Hey You',
//       auraColor: 'auraOne',
//     },
//   });
//
//   const navigate = useNavigate();
//   // post is used here and not put because this is user generated data sent
//   // over the web.
//   const onSubmit = (values, e) => {
//     e.preventDefault();
//     JSON.stringify(values);
//     console.log("the values are: ", values);
//     props.getNameAura(values);
//     navigate('/fortune');
//   }
//
//   return (
//     <>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Row className="show grid text-center">
//           <Col className="element-wrapper">
//             <label className="legend" htmlFor="name">
//               A Name, a Totally Real Name
//             </label>
//             <br />
//             <Form.Group className="mb-3" controlId="formBasicName">
//               <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="name"
//                   size="lg"
//                   placeholder="Name here"
//                   {...register("name", {
//                     required: 'This is a required field (but you can input a fake name)',
//                     pattern: {
//                       value: /^[a-zA-Z -.]{2,30}$/,
//                       message:
//                         'Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please.',
//                       },
//                   })}
//                 />
//                 <br />
//                 <p style={{ color: 'palegreen' }}>
//                   {errors.name && errors.name.message}
//                 </p>
//                 <br />
//             </Form.Group>
//           </Col>
//
//           <Col sm={4}>
//             <Container>
//               <label className="legend" htmlFor="auraColor">
//                 Current Aura Color
//               </label>
//               <fieldset>
//                 <Row className="show grid text-center">
//                   <Col>
//                     <label className="auraOne" aria-label="Peach Pink Aura">
//                       <input
//                         type="radio"
//                         value="auraOne"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Peach Pink Aura">------</abbr>
//                     </label>
//
//                     <label className="auraTwo" aria-label="Gold Aura">
//                       <input
//                         type="radio"
//                         value="auraTwo"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Gold Aura">------</abbr>
//                     </label>
//
//                     <label className="auraThree" aria-label="Light Spring Green Aura">
//                       <input
//                         type="radio"
//                         value="auraThree"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Light Spring Green Aura">------</abbr>
//                     </label>
//
//                     <label className="auraFour" aria-label="Cyan Aura">
//                       <input
//                         type="radio"
//                         value="auraFour"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Cyan Aura" aria-label="Cyan Aura">------</abbr>
//                     </label>
//
//                     <label className="auraFive" aria-label="Medium Blue Purple Aura">
//                       <input
//                         type="radio"
//                         value="auraFive"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Medium Blue Purple Aura">------</abbr>
//                     </label>
//                   </Col>
//
//                   <Col>
//                     <label className="auraSix" aria-label="No Aura">
//                       <input
//                         type="radio"
//                         value="auraSix"
//                         {...register("auraColor", { required: true })}
//                       /><abbr title="No Aura">{' '}
//                       What Aura?</abbr>
//                     </label>
//
//                     <label className="auraTwelve" aria-label="Dark Gray Aura">
//                       <input
//                         type="radio"
//                         value="auraTwelve"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Dark Gray Aura">------</abbr>
//                     </label>
//
//                     <label className="auraThirteen" aria-label="Orange Aura">
//                       <input
//                         type="radio"
//                         value="auraThirteen"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Orange Aura">------</abbr>
//                     </label>
//                   </Col>
//
//                   <Col>
//                     <label className="auraSeven" aria-label="Medium Violet Red Aura">
//                       <input
//                         type="radio"
//                         value="auraSeven"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Medium Violet Red Aura">------</abbr>
//                     </label>
//
//                     <label className="auraEight" aria-label="Snow Aura">
//                       <input
//                         type="radio"
//                         value="auraEight"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Snow Aura">------</abbr>
//                     </label>
//
//                     <label className="auraNine" aria-label="Lime Green Aura">
//                       <input
//                         type="radio"
//                         value="auraNine"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Lime Green Aura">------</abbr>
//                     </label>
//
//                     <label className="auraTen" aria-label="Medium Bright Blue Aura">
//                       <input
//                         type="radio"
//                         value="auraTen"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Medium Bright Blue Aura">------</abbr>
//                     </label>
//
//                     <label className="auraEleven" aria-label="Dark Purple Aura">
//                       <input
//                         type="radio"
//                         value="auraEleven"
//                         {...register("auraColor", { required: true })}
//                       />
//                     <abbr title="Dark Purple Aura">------</abbr>
//                     </label>
//                   </Col>
//                 </Row>
//               </fieldset>
//             </Container>
//           </Col>
//
//           <Col>
//             <br />
//             <br />
//             <Container className="container-cuttlefish">
//               <button
//                 name="The submit button"
//                 className="btn-og-circle"
//                 type="submit"
//               >
//                 Fortune Now!
//               </button>
//             </Container>
//           </Col>
//         </Row>
//       </Form>
//     </>
//   );
// }
//
// FortuneForm.propTypes = {
//   getNameAura: PropTypes.func.isRequired,
// };
//
// export default connect(null, { getNameAura })(FortuneForm);
