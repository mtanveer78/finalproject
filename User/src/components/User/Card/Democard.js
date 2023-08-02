import React, { useEffect } from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import swal from "sweetalert";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Democard() {
  useEffect(() => {
    // if (!window.document.getElementById("stripe-script")) {
    //   var s = window.document.createElement("script");
    //   s.id = "stripe-script";
    //   s.type = "text/javascript";
    //   s.src = "https://js.stripe.com/v2/";
    //   s.onload = () => {
    //     window["Stripe"].setPublishableKey(
    //       "pk_test_51JSxdmKLp2r7ix2Pi5ILfQgjdc0pYNXFwZ9noGPoeS7jnPqmcL4zmUJhoVdtjAASrIfmWZPFmRxeLNICbstufWrh00UjKUrlKq"
    //     );
    //   };
    //   window.document.body.appendChild(s);
    // }
  }, []);

  const onSubmit = async () => {
    await sleep(300);
    swal("success", `Succesfully done payment`, "success")
    // try {
    //   window.Stripe.card.createToken(
    //     {
    //       number: values.number,
    //       exp_month: values.expiry.split("/")[0],
    //       exp_year: values.expiry.split("/")[1],
    //       cvc: values.cvc,
    //       name: values.name,
    //     },
    //     (status, response) => {
    //       if (status === 200) {
            
    //           swal("success", `reponse: ${response}`, "success").then(() => {
    //             console.log("success")
    //           });
    //       } else {
    //         console.log(response.error.message);
    //       }
    //     }
    //   );
    // } catch (error) {}
  };

  return (
    <Styles>
    
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
           
           
            <form onSubmit={handleSubmit}>
              <div className="popup-box">
                <div className="box">
                  <span className="close-icon" onClick={""}>
                    x
                  </span>
                  </div>
                  </div>
              <Card
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              <div>
                <Field
                  name="amount"
                  component="input"
                  type="number"
                  placeholder="Amount"
                />
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              {/* <h2>Values</h2>
              <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          );

        }
        
        }
      />
    </Styles>
  );
}

export default Democard;