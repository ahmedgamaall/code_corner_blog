type DialogProps = {
  isVisible: boolean;
  errorMessage: string;
  successMessage: string;
};

export default function Dialog({
  isVisible,
  errorMessage,
  successMessage,
}: DialogProps) {
  if (isVisible) {
    return (
      <div
        className={
          errorMessage !== ""
            ? "bg-red-300 px-12 py-6 text-center mb-10"
            : "bg-green-300 px-12 py-6 text-center mb-10"
        }
      >
        {errorMessage !== "" ? (
          <div className="text-red-700 text-2xl font-medium">
            {errorMessage}
          </div>
        ) : (
          <div className="text-green-700 text-2xl font-medium">
            {successMessage}
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}
