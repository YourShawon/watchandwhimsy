import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ReuseTooltipProps {
  children: ReactNode;
  text: string;
  cb?: () => void; // cb is optional and expects a function, or undefined
}

function ReuseTooltip({ children, text, cb }: ReuseTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Button
            className={`group/btn h-8 w-8 rounded-full border-none bg-[#E8F6EA] transition-all duration-700 hover:-translate-y-1 hover:bg-[#088178]`}
            size="icon"
            onClick={cb}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="rounded-xl border-none bg-[#088178] text-xs text-[#fff]">
          <span>{text}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ReuseTooltip;
