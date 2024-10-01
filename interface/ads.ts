export interface AdsItemProps {
    bgImage: string;
    headerTop: string;
    headerPara: string;
    heading: string;
    newPrice: string;
    oldPrice: string;
    count1: string;
    count2: string;
    count3: string;
    count4: string;
    diffColor?: boolean; // Optional prop with a default value of `false`
  }

export interface TimerProps {
  timerCounter: string,
  timerText: string
}