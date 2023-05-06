import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const style = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#FFFAFA",
  zIndex: "10"
};

const data = [
  {
    subject: "Кол-во отказов",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "ИО",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Ср ВБР ФГ",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Кол-во тестов",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function calcProb(time) {
  return Math.exp(-1.765 * Math.pow(10, -5) * 10 * time);
}

const getData = (value) => {
  let mas = [];
  let mid = 0;
  while (value--) {
    mid++;
    mas.push({
      uv: calcProb(mid)
      // amt: getRandomInt(10, 100)
    });
  }

  return mas;
};

export default function ChartPage({ timeTest, valueInput }) {
  return (
    <div style={style} className="container">
      <div className="row row-cols-2">
        <div className="col text-center" style={{ color: "green" }}>
          Зависимость среднего кол-ва отказов ФГ во времени
        </div>
        <div className="col" style={{ color: "green" }}>
          Зависимость интенсивности отказов от времени
        </div>
        <LineChart
          className="col"
          width={500}
          height={300}
          data={getData(timeTest)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <LineChart
          className="col"
          width={500}
          height={300}
          data={getData(timeTest)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <span className="col text-center" style={{ color: "green" }}>
          Зависимость вероятности безотказной работы от времени
        </span>
        <span className="col" style={{ color: "green" }}>
          График радар показателей ФГ
        </span>
        <LineChart
          className="col"
          width={500}
          height={300}
          data={getData(timeTest)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <ResponsiveContainer width="30%" height={300} className="col">
          <RadarChart cx="50%" cy="30%" outerRadius="50%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
