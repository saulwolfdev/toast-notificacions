import toast, { Toaster, resolveValue } from "react-hot-toast";
import styled from "styled-components";

const BaseToast = styled.div`
  background: #333;
  border-radius: 5px;
  color: #ddd;
  display: flex;
  align-items: center;
  padding: 15px;
  padding-right: 10px;
  width: 340px;
  height: 30px;
`;

const Content = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
`;

const Indicator = styled.div`
  background: ${(p) =>
    p.type === "loading"
      ? "#fbbf24" // Yellow
      : p.type === "success"
      ? "#61d345" // Green
      : "#ff4b4b"};
  border-radius: 99px;
  width: 5px;
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

const DismissButton = styled.button`
  width: 16px;
  height: 16px;
  font-size: 24px;
  display: flex;
  justify-items: center;
  align-items: center;
  background: transparent;
  padding: 12px;
  border: none;
  color: gray;

  &:hover {
    color: white;
  }
`;

/* const enterAnimation = keyframes`
 from {
   opacity: 0;
   transform: translateY(-30px);
 }
 to {
   opacity: 1;
   transform: translateY(0px);
 }
`;

const exitAnimation = keyframes`
 from {
   opacity: 1;
   transform: translateX(0px);
 }
 to {
   opacity: 0;
   transform: translateX(100%);
 }
`; */

const randomPromise = (n) =>
  new Promise((resolve, reject) =>
    setTimeout(Math.random() > 0.3 ? resolve : reject, n)
  );

export const notify = () => {
  toast.promise(randomPromise(Math.random() * 5000), {
    success: "Success!",
    error: "Error",
    loading: "Wait..."
  });
};

export const CustomToaster = () => (
  <Toaster position="top-right" >
    {(t) => (
      <BaseToast
        /* style={{
          animation: t.visible
            ? `${enterAnimation} 0.2s ease-out forwards`
            : `${exitAnimation} 0.4s ease-in forwards`
        }} */
      >
        <Indicator type={t.type} />
        <Content>{resolveValue(t.message)}</Content>
        {t.type !== "loading" && (
          <DismissButton onClick={() => toast.dismiss(t.id)}>
            &#215;
          </DismissButton>
        )}
      </BaseToast>
    )}
  </Toaster>
);