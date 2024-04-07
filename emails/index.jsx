import { Button, Html } from "@react-email/components";
import Image from "next/image";
import * as React from "react";

export default function Email() {
  
    
    return (
        <Html>
           <table
      cellSpacing="0"
      cellPadding="0"
      width="100%"
      style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333' }}
    >
      <tbody>
        <tr>
          <td align="center">
            <table cellSpacing="0" cellPadding="0" width="600" style={{ backgroundColor: '#ffffff' }}>
              <tbody>
                {/* Header */}
                <tr>
                  <td
                    align="center"
                    style={{
                      padding: '20px',
                      borderBottom: '1px solid #e0e0e0',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <h1 style={{ margin: '0', color: '#ff5722' }}>Food Order Confirmation</h1>
                  </td>
                </tr>

                {/* Order Details */}
                <tr>
                  <td align="center" style={{ padding: '20px' }}>
                    <h2 style={{ margin: '0', fontSize: '24px', color: '#333' }}>Thank you for your order!</h2>
                    <p style={{ marginTop: '20px', fontSize: '16px' }}>
                      Your order has been confirmed and will be delivered shortly.
                    </p>

                    {/* Order Summary */}
                    

                    {/* Total */}
                    <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                      ......................................................................................
                    </p>

                    {/* Delivery Information */}
                    <p style={{ margin: '20px 0 10px', fontSize: '20px', color: '#333' }}>Don't forget to Provide rating this will benificial for future  </p>
                    <p style={{ fontSize: '16px' }}>
                      Jai Hind
                    </p>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td
                    align="center"
                    style={{
                      padding: '20px',
                      borderTop: '1px solid #e0e0e0',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <p style={{ margin: '0', fontSize: '14px' }}>
                      Thank you for choosing our service!<br />
                      For any inquiries, please contact us at support@example.com.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
        </Html>
    );
    
}
