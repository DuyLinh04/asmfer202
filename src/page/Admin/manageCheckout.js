import { useSelector } from 'react-redux';

const ManageCheckout = () => {
  const { checkoutInfo } = useSelector((state) => state.checkout);
  const revenue = checkoutInfo.reduce((accumulator, checkoutItem) => {
    return accumulator + checkoutItem.totalPrice;
  }, 0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <p style={{ fontSize: 24 }}>Revenue of orchid shop: {revenue} VND</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 30,
        }}
      >
        {checkoutInfo?.map((checkoutItem) => {
          return (
            <div
              style={{
                backgroundColor: 'orange',
                width: 700,
                padding: 30,
                borderRadius: 20,
              }}
            >
              <p style={{ fontSize: 18, margin: 0 }}>
                Customer: {checkoutItem.name}
              </p>
              <p style={{ fontSize: 18, margin: 0 }}>
                Phone number: {checkoutItem.phoneNumber}
              </p>
              <p style={{ fontSize: 18, margin: 0 }}>
                Email address: {checkoutItem.email}
              </p>
              <p style={{ fontSize: 18, margin: 0 }}>
                Address: {checkoutItem.address}
              </p>
              <p style={{ fontSize: 18, margin: 0 }}>
                Order price: {checkoutItem.totalPrice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageCheckout;
