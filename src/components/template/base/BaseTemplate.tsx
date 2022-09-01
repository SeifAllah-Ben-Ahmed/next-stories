export interface IBaseTemplate {
  sampleTextProps: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProps }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProps}
    </div>
  );
};

export default BaseTemplate;
